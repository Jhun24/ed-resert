/**
 * Created by janghunlee on 2017. 2. 28..
 */
var filter = "win16 | win32 | win64 | mac | macintel";
var password;
$(".list").click(function(){
    $(this).addClass("dataClick");
    $(".content-list").removeClass("none")

    $(".stat").removeClass("dataClick");
    $(".status").addClass("none");
});

$(".stat").click(function(){
    $(this).addClass("dataClick");
    $(".status").removeClass("none")
    $(".list").removeClass("dataClick");
    $(".content-list").addClass("none")
});

$(document).ready(function(){
	
    
        if(-1 != filter.indexOf(navigator.platform.toLowerCase())){
            $(".status-list").addClass("flex");
        }
        else{
            // $(".status-list").css({"display":"block"});
            $(".status-box").css({"width":"100%"});
            $(".status-box").css({"margin-bottom":"10px"});
            $(".status").css({"overflow-y":"auto"});
            $(".status-list").css({"height":"70%"});
            $(".status-box").css({"height":"50%"});
        }

        $.ajax({
            method:"POST",
            url:"https://iwin247.kr",
            data:{"pass":"h0t$ix"},
            success:function(data){
                let boy = 0;
                let girl = 0;
                let multi =0;
                let soft =0;
                let content;
                let tech = 0;
                console.log(data)

                content = $(".content-list").html();

                let check = new Array()

                for(let i = 0; i<data.length; i++){
                    var nameCheck = 0;
                    for(let e = 0; e<data.length; e++){
                        if(data[i]["name"] == check[e]){
                            data[i]["name"] = ""

                            nameCheck = 1;

                        }

                    }
                    if(nameCheck == 0){
                        check[check.length] = data[i]["name"];
                    }
                }

                let time = 0;

                for(let i = 0; i<data.length; i++ ){



                    time++;

                    if(data[i]["name"]=="ألبا أن دادي" ||data[i]["name"]=="테경" || data[i]["name"] == "노무현" || data[i]["name"] == "박근혜" || data[i]["name"] == "박태준" || data[i]["name"] == "우선정" || data[i]["name"] == "김연준" || data[i]["name"] == "dsaf" || data[i]["name"] == "" || data[i]["name"] == "이장훈" || data[i]["name"]=="ㄱㄴㄷ" || data[i]["name"] == "a"){
                        time--;
                    }
                    else{
                        content += "<div class=\"content-box\">"
                        content += "<div class=\"content-text\">"
                        content += "<div class=\"num\">"+ time+"</div>"
                        content += "<div class=\"name\">"+data[i]["name"]+"</div>"
                        content += "<div class=\"school-num\">"+data[i]["Student_Num"]+"</div>"
                        content += "<div class=\"sex\">"+data[i]["gender"]+"</div>"
                        content += "<div class=\"email\">"+data[i]["email"]+"</div>"
                        content += "<div class=\"phone\">"+data[i]["Phone_Num"]+"</div>"
                        content += "<div class=\"class\">"+data[i]["Department"]+"</div>"
                        content += "<div class=\"more\"></div>"
                        content += "</div>"
                        content += "<div class=\"content-info\">"
                        content += "<div class=\"self\"> 자기소개 : "+data[i]["introduce"]+"</div>"
                        content += "<div class=\"dong\"> 지원동기 : "+data[i]["why_edcan"]+"</div>"
                        content += "<div class=\"master\"> 전공과목 : "+data[i]["what_can_u_do"]+"</div>"
                        content += "</div>"
                        content+= "</div>"

                        if(data[i]["gender"] == "남자"){
                            boy++;
                        }
                        else{
                            girl++;
                        }

                        if(data[i]["Department"] == "소프트웨어과"){
                            soft++;
                        }
                        else if(data[i]["Department"] == "테크노경영과"){
                            tech++;
                        }
                        else{
                            multi++;
                        }



                    }

                }

                $(".all-num").text(time + "명");

                $(".boy-num").text(boy+"명");
                $(".girl-num").text(girl+"명")
                $(".soft-num").text(soft+"명")
                $(".multi-num").text(multi+"명")
                $(".tech-num").text(tech+"명")
                $(".content-list").html(content);


            },
            error:function(){
                alert("server error");

            }
        })
    
})
