function setState() {
    if (isMouseDown) {
        state = LOCKED
    } else {
        state = UNLOCKED
    }
    document.getElementById("state").innerHTML = state
}
// Globals
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let screenRect;
let twoKanjis = []
let prevMouseX, prevMouseY;
let isMouseDown = false;
const NILL = -1
let active = 0
let lastActive = undefined
const UNLOCKED = "UNLOCKED"
const LOCKED = "LOCKED"
let state = UNLOCKED
//
function sizer(index, newSize) {
    twoKanjis[index].size += newSize
}


function getTwoRandomKanjis(pos1, pos2) {
    console.log("XXX pos1=" + pos1 + " pos2=" + pos2 )

    const a = getRandomThingByType(pos1)
    const b = getRandomThingByType(pos2)
    twoKanjis = []
    
    let ax = 175
    let ay = 150
    let bx = 250
    let by = 150
    if ( a.p === positions.TOP) {
        ax = 200
        ay = 100
        bx = 200
        by = 200    
    } else if ( a.p === positions.RIGHT) {
        ax = 250
        ay = 150
        bx = 175
        by = 150    
    } else if ( a.p === positions.BOTTOM) {
        ax = 200
        ay = 150
        bx = 200
        by = 100    
    }

    twoKanjis.push(new Thing(ax, ay, a.k, "A", a.e))
    twoKanjis.push(new Thing(bx, by, b.k, "B", b.e))
    console.log("left " + JSON.stringify(a))
    console.log("nill " + JSON.stringify(b))
    twoKanjis[0].updateDom()
    twoKanjis[1].updateDom()

}

function getLeftNill() {
    getTwoRandomKanjis( positions.LEFT, positions.NILL)
}
function getRightNill() {
    getTwoRandomKanjis( positions.RIGHT,positions.NILL)
}
function getTopNill() {
    getTwoRandomKanjis( positions.TOP, positions.NILL)
}
function getBottomNill() {
    getTwoRandomKanjis( positions.TOP, positions.BOTTOM)
}
function getBottomTop() {
    getTwoRandomKanjis( positions.BOTTOM, positions.TOP)
}

function init() {
    screenRect = canvas.getBoundingClientRect();
    const goat = getSomeRandomThing()

    getBottomTop()
    addKeyEventListener();

    animate();
}
function isInBounds(x, y) {
    if (x > 0 && y > 0 && x < canvas.width && y < canvas.height) {
        return true
    }
    return false
}
function addKeyEventListener() {
    canvas.onmousedown = function (e) {
        prevMouseX = event.clientX - screenRect.left;
        prevMouseY = event.clientY - screenRect.top;
        isMouseDown = true;
        setState(isMouseDown)
    }
    canvas.onmousemove = function (e) {
        if (isMouseDown && active !== NILL) {
            const x = event.clientX - screenRect.left;
            const y = event.clientY - screenRect.top;

            let horizon = 100
            let actual = 10000000;
            let found = NILL
            console.log("%c state=" + state , "background:yellow;")
           //if (state === UNLOCKED) {
                twoKanjis.forEach((thing, i) => {
                    const d = Math.sqrt((thing.x - x) * (thing.x - x) + (thing.y - y) * (thing.y - y));
                    // console.log( i + "    " + x + "   y " + y + "   " + d )
                    if (d < actual && d < horizon) {
                        actual = d
                        found = i
                    }
                })
          // }
            if (found !== NILL) {
                if (lastActive !== active) {
                    lastActive = active
                    twoKanjis[active].updateDom()
                    // console.log("%c " + active + " " + lastActive, "background:blue")
                }
                active = found
                document.getElementById("active").innerHTML = twoKanjis[active].name
                const dx = x - prevMouseX;
                const dy = y - prevMouseY;

                const candidateX = twoKanjis[active].x + dx
                const candidateY = twoKanjis[active].y + dy
                if (isInBounds(candidateX, candidateY)) {
                    twoKanjis[active].x = candidateX
                    twoKanjis[active].y = candidateY
                    prevMouseX = x;
                    prevMouseY = y;
                }
            }
        }

    }

    canvas.onmouseup = function (e) {
        //var x = event.clientX - screenRect.left;
        //var y = event.clientY - screenRect.top;
        isMouseDown = false;
        isRectSelected = false;
        // active = NILL
        setState(isMouseDown)

    }

    canvas.onmouseout = function (e) {
        isMouseDown = false;
    }
}

function animate() {
    drawCanvasBackground();
    draw();
    requestAnimationFrame(function () {
        // The window.requestAnimationFrame() method tells the browser 
        // that you wish to perform an animation and requests that the 
        // browser calls a specified function to update an animation before 
        // the next repaint. The method takes a callback as an argument to 
        // be invoked before the repaint.
        animate();
    });
}

function drawCanvasBackground() {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
}

function draw() {
    ctx.strokeStyle = 'black';
    twoKanjis.forEach((thing) => {
        // ctx.beginPath();
        // ctx.arc(thing.x, thing.y, thing.size, 0, 2 * Math.PI);
        // ctx.stroke();
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.textAlign = "end";
        ctx.font = `${thing.size}px Arial`;
        ctx.fillText(thing.kanji, thing.x, thing.y);
        ctx.stroke();
    })
}


init()