console.log(danishInflationNumbersWithYear);
console.log(danishInflationNumbers);

const notes = [
    'C4', 'E4', 'G4',
    'C5', 'E5', 'G5'
];

let index = 0;

const synthA = new Tone.FMSynth().toDestination();

const loopA = new Tone.Loop(time => {
    for (let inflationNumber of danishInflationNumbers) {
        Tone.Transport.bpm.value = 50 + inflationNumber;
    }
    console.log(Tone.Transport.bpm.value)
    let note = notes[index % notes.length];
    synthA.triggerAttackRelease(note, "8n", time);
    index++;
}, "4n").start(0);

Tone.Transport.start()