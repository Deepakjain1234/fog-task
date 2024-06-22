
import React from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import '../styles/SongList.css';

const SortableItem = ({ song, index, onSongClick, currentSong }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : 'auto'
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`song-item ${currentSong && currentSong.id === song.id ? 'active' : ''}`}
      onClick={() => onSongClick(song)}
    >
      <div style={{width:'85%',display:'flex',alignItems:'center',justifyContent:'space-between',margin:'auto' ,fontSize:13,}}>
      <span style={{width:'5%'}}>{index + 1}</span>
      <img src={song.image} style={{height:40,width:40 ,marginRight:23}} alt="" />
      <span style={{width:'25%'}}>{song.title}</span>
      <span style={{width:'15%'}}>{song.plays}</span>
      <span style={{width:'10%'}}>{song.time}</span>
      <span style={{width:'35%',textAlign:'left'}}>{song.album}</span>
      </div>
    </div>
  );
};

const SongList = ({ songs, onSongClick, currentSong, setSongs }) => {
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = songs.findIndex((song) => song.id === active.id);
      const newIndex = songs.findIndex((song) => song.id === over.id);
      const updatedSongs = arrayMove(songs, oldIndex, newIndex);
      setSongs(updatedSongs);
    }
  };

  return (
    <div className="song-list">
      <div className="song-list-header">
        <span style={{width:'5%'}}>#</span>
        <span style={{width:'25%',paddingLeft:9}}>TITLE</span>
        <span style={{width:'15%',paddingLeft:65}}>PLAYING</span>
        <span style={{width:'10%'}}>TIME</span>
        <span style={{width:'35%' }}>ALBUM</span>
      </div>
     
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={songs}
          strategy={verticalListSortingStrategy}
        >
          {songs.map((song, index) => (
            <SortableItem
              key={song.id}
              index={index}
              song={song}
              onSongClick={onSongClick}
              currentSong={currentSong}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default SongList;
