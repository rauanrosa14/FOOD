
function option(position){
    position++;
    let options = document.getElementsByClassName('option');
    let option = options.length;
    let op = new Array(option++);
    let photo = document.querySelector('#img-gallery');
    for(i = 0;i < option+1;i++){
        op[i] = `images/g-`+i+`.jpg`;
        
    }
    console.log(op[position])
    photo.setAttribute('src',op[position]);
}