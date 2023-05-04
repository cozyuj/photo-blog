const generateBtn = document.querySelector('#generateBtn')
const gridContainer = document.querySelector('#gridContainer')

generateBtn.addEventListener('click',() => {
    if(gridContainer.children.length>=30){
        const confirmed = confirm('이미지 개수가 30개를 초과했습니다. 초기화 하시겠습니까?');
        if(confirmed){gridContainer.innerHTML=''}
    }else{
        const randomNumber = Math.floor(Math.random()*1000)+1; //1부터 1000사이의 랜덤한 숫자를 리턴
        const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;
        const img = document.createElement('img');
    
        img.src = imgUrl;
    
        gridContainer.appendChild(img);
    }
});