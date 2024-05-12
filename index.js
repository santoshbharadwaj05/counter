let count=0;
const decreasebtn = document.getElementsById("decrement-btn");
const resetbtn = document.getElementsById("reset");
const increasebtn = document.getElementsById("increment-btn");
const myl = document.getElementById("counter-value");
increasebtn.onclick = function()
{
    count++;
    myl.textContent = count;
}
decreasebtn.onclick = function()
{
    count--;
    myl.textContent=count;

}

resetbtn.onclick= function()
{
    count = 0;
    myl.textContent=count;

}