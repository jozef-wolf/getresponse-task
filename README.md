# Recruitment task - Diet calendar
### Time: 1 week.

### Technologies: 
#### HTML, CSS, JavaSciprt, React, styled-components.

##### The reason I chose styled-components is because I heared that getresponse IT team is using it and I wanted to learn it 


### Nagivation: 
#### hover effect, mobile hamburger menu.

### Table Selections:
#### 4 weeks progress dots, week slider, food icons selection.

### Table:
#### I have created db.json file. I used json-server to get full fake REST API and fetch the data.
##### I have changed url from `fetch("http://localhost:3000/meals")` to `fetch("https://my-json-server.typicode.com/jozef-wolf/db.json/meals")` to deploy it to gh-pages.

#### At first I wanted to make semantic table but it wasn't enough time (It is working but it is not fininshed, You can just comment it out).
#### So I made second version using flex-box which was much easier to complete ( semantic `<Table/>` and import is commented out in TableContainer.jsx file)
#### I have made new component to make mobile version of table and used slider to change days.

#### [go to Diet Calendar](https://jozef-wolf.github.io/getresponse-task/)
