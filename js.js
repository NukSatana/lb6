// let a=document.querySelector('#inp1').value;
// let b=document.querySelector('#inp2').value;

// let button1=document.querySelector('#btn1');
// let txt=document.querySelector('#txt1');


// button1.addEventListener('click', ()=> {
//     c=Number(a)+Number(b);
//     Text.innerHTML='Result: '+(c);
// })

// let a=document.querySelector('#inp1').value;
// let b=document.querySelector('#inp2').value;
// let c=document.querySelector('#inp3').value;

// let button1=document.querySelector('#btn1');
// let txt=document.querySelector('#task3');

// button1.addEventListener('click', ()=> {
//     f=Number(a)+Number(b)+Number(c);
//     Text.innerHTML='Result: '+(f);
// })


// let button2=document.querySelector('#btn2');
// button2.addEventListener('click', addCircle)

// function addCircle() {
//     let newCircle=document.createElement('div');
//     tst2.appendChild(newCircle);
//     newCircle.classList.add('cercle');
// }

let shapes = [];

function addShape() {
  const newShape = {
    type: "circle",
    radius: 50,
    color: "blue"
  };

  shapes.push(newShape);
  console.log("Shape added:", newShape);
  console.log("All shapes:", shapes);

  displayShapes();
}

function displayShapes() {
  const container = document.getElementById("shapes-container");
  container.innerHTML = "";

  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    const shapeElement = document.createElement("div");
    shapeElement.className = "shape";
    shapeElement.style.width = shape.radius * 2 + "px";
    shapeElement.style.height = shape.radius * 2 + "px";
    shapeElement.style.backgroundColor = shape.color;

    container.appendChild(shapeElement);
  }
}

