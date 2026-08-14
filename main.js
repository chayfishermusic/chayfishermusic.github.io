function ReduceDefaultVolume() {
    Array.from(document.getElementsByTagName("audio")).forEach((i) => {
        i.volume = 0.25;
    });
}

ReduceDefaultVolume();