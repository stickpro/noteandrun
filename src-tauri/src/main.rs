// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::time::SystemTime;

use bonsaidb::core::schema::{Collection, SerializedCollection};
use bonsaidb::local::config::{Builder, StorageConfiguration};
use bonsaidb::local::Database;
use serde::{Deserialize, Serialize};

#[tauri::command]
async fn save_text(text: String) -> Result<(), bonsaidb::core::Error> {

    let db = Database::open::<BlogPost>(StorageConfiguration::new("my-db.bonsaidb"))?;

    let document = Message {
        contents: String::from(text),
        timestamp: SystemTime::now(),
    }
        .push_into(&db)?;

    let message_doc =
        Message::get(&document.header.id, &db)?.expect("couldn't retrieve stored item");

    println!(
        "Inserted message '{:?}' with id {}",
        message_doc.contents, message_doc.header.id
    );

    Ok(())
}

#[derive(Debug, Serialize, Deserialize, Collection)]
#[collection(name = "blog_posts")]
struct BlogPost {
    pub title: String,
    pub contents: String,
}


#[derive(Debug, Serialize, Deserialize, Collection)]
#[collection(name = "blog_posts")]  // Set the collection name
struct BlogPostCollection {
    #[serde(rename = "title")] // Map the field to the collection
    pub title: String,
    #[serde(rename = "contents")] // Map the field to the collection
    pub contents: String,
}

#[derive(Debug, Serialize, Deserialize, Collection)]
#[collection(name = "messages")]
struct Message {
    pub timestamp: SystemTime,
    pub contents: String,
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_text])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
