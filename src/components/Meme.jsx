import React from "react";

export default function Meme() {
    return (
        <main className="meme">
            <form className="form">
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Top Text"
                />
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Bottom Text"
                />
                <button className="form--button">
                    Get a new meme image  
                    <span aria-label="picture frame" role="img"> 🖼</span>
                </button>
            </form>
        </main>
    )
}