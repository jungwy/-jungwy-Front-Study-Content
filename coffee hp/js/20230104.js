$('button').click(function(){

    var txt = $('input').val();
    console.log(txt);

    if(txt==''){
        // input에 아무것도 입력하지 않으면
        // alert창이 뜨도록
        alert('할일을 입력해주세요!');
    }else{
        var li = document.createElement('li');
        li.innerText = txt;
        console.log(li);

        $('#todolist').append(li);

        var lilist = document.querySelectorAll('li');
        for(var i=0;i<lilist.length;i++){
            lilist[i].onclick = function(){
                $(this).toggleClass('checked');
            }
        }


        $('input').val(''); //인풋 안의 내용 비워주기

    };

});

var lilist = document.querySelectorAll('li');
    for(var i=0;i<lilist.length;i++){
        lilist[i].onclick = function(){
           $(this).toggleClass('checked');
        }
}


// .todolist에 담긴 li의 갯수가 달라졌기때문에
// 자바스크립트로 li를 전부 한가지 변수에 담아서 반복문을 돌려
// click event를 넣어주어야 정상실행됩니다.

