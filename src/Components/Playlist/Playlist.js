import React from "react";
import { TrackList } from "../TrackList/TrackList";
import "./Playlist.css"

export class Playlist extends React.Component {

  constructor(props){
    super(props);

    this.handleNameCHange = this.handleNameCHange.bind(this);
  }
   handleNameCHange(e){
      let value = e.target.value;
      this.props.onNameChange(value);
   }

    render(){
        return <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameCHange}/>
       <TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    }
}