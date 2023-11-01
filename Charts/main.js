const ctx = document.querySelector('#chart').getContext('2d');

/*
// Exercise 1 - level 1
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Denmark',
            data: [1000, 825, 600, 375],
        }]
    }
});

 */

/*
// Exercise 2 - level 1
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['DK', 'SE', 'NO', 'UK'],
        datasets: [{
            label: 'Country exports',
            data: [1000, 825, 600, 375],
        }]
    }
});

 */

/*
// Exercise 3 - level 1
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Kanye West Listeners', 'Taylor Swift Listeners'],
        datasets: [{
            label: 'Country exports',
            data: [55, 45],
        }]
    }
});

 */

/*
//Exercise 4 - level 1
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Denmark',
            data: [1000, 825, 600, 375],
        },{
            label: 'Sweden',
            data: [900, 400, 600, 700],
        }]
    }
});

 */

/*
// Exercise 5 - level 2
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['DK', 'SE', 'NO', 'UK'],
        datasets: [{
            label: 'Country exports',
            data: [
                1000,
                825,
                600,
                375
            ],
            backgroundColor: [
                'red',
                'lightgrey',
                'lightgrey',
                'lightgrey',
            ],
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title',
            }
        }
    }
});

 */


// Exercise 6 - level 2
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        datasets: [{
            label: 'TikTok Views',
            data: [20, 80, 90, 70]
        }, {
            label: 'Youtube Views',
            data: [70, 70, 60, 80],
            borderColor: 'lightblue',
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'TikTok vs Youtube Views',
                font: {
                    size: 25,
                }
            },
            legend: {
                position: 'bottom',
            }
        }
    }
});

/*
// Exercise 7 - level 3
const chart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Houses',
            data: [{
                x: 100,
                y: 1000000
            }, {
                x: 110,
                y: 2500000
            }, {
                x: 120,
                y: 2000000
            }, {
                x: 130,
                y: 3000000
            }],
            backgroundColor: 'red',
        }],
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'House Prices vs Size',
                font: {
                    size: 25,
                }
            },
            legend: {
                position: 'bottom',
            },
            tooltip: {
                events: ['click'],
                callbacks: {
                    label: (context) => {
                        alert(`Size: ${context.raw.x}\nPrice: ${context.raw.y}`)
                    }
                }
            }
        }
    }
});

 */