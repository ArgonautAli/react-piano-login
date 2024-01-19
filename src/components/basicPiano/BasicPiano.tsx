// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SoundfontProvider from "./SoundFontProviderr.js";

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.AudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});


export const BasicPiano = (props: {handleChange: any, isOff: boolean})  => {
    return (
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        audioContext={audioContext}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote }: any) => (
          <Piano
            disabled={props.isOff}
            noteRange={noteRange}
            width={300}
            playNote={playNote}
            stopNote={stopNote}
            keyboardShortcuts={keyboardShortcuts}
            onPlayNoteInput = {(e: any) => {props.handleChange(e)}}
          />
        )}
      />
    );
  }