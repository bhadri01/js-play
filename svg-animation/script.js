let path = document.querySelectorAll("#svg path");
delay = 0.2;
for (i = 0; i < path.length; i++) {
  length = path[i].getTotalLength();
  path[i].style.strokeDasharray = length;
  path[i].style.strokeDashoffset = length;
  path[i].style.animation = `svg 2.5s ${delay}s ease-out forwards`;
  delay += 0.2;
}
