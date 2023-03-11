D = document;
select = q => D.querySelector(q);

append = c => select('#cc-comicbody').appendChild(c);
append(D.createElement('p'));
append(D.createTextNode(
    select('#cc-comic').title));
select('#extracomic').click()
