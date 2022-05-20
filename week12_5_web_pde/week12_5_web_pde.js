function setup(){
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

// -1:沒選,0:Choice 1
var choice;

function draw(){
    background(color(0x77, 0xD6, 0xA2));
    fill(color(0xFF, 0xFF, 0xFF));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if (choice == 3)
        rect(50, 200, 150, 2);
    if (choice == 4)
        rect(50, 250, 150, 2);
    text("中餐吃泡麵", 50, 50);
    text("中餐吃UberEat", 50, 100);
    text("中餐吃FoodPanda", 50, 150);
    text("中餐吃牛排", 50, 200);
    text("中餐吃大餐", 50, 250);
}

function mousePressed() {
    // choice=(choice + 1)%3;
    choice = int(random(5));
}

function initializeFields(){
    choice = -1;
}
