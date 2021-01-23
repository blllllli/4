window.open=alert("若想修改，则直接点击后修改哦");
var u = 0;
var iiid = "test" + u;

function add() {
    iiid = "test" + u;
    var text1 = document.getElementById("add").value;
    var ul = document.getElementById("box3");
    var li = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "text");
    checkBox.value = text1;
    li.appendChild(checkBox);
    ul.appendChild(li);
    var b = document.getElementById("butt");
    var li1 = document.createElement("li");
    var bu = document.createElement("input");
    bu.setAttribute("type", "button");
    bu.setAttribute("value", "删除");
    bu.setAttribute("id", iiid);
    bu.setAttribute("onclick", 'delete1(this.id)');
    li1.appendChild(bu);
    b.appendChild(li1);
    console.log("u add:"+u);
    u = u + 1;
    document.getElementById("count1").innerHTML = u;
}

function delete1(k) {
    var uu;
    uu = k[4];
    // alert(uu);
    var w = document.getElementById("butt");
    var list = w.querySelectorAll("li");
    var p = document.getElementById("box3");
    var llist = p.querySelectorAll("li");
    var e = list.length;
    uu = Number(uu);
    console.log("len: "+ e);
    console.log("uu: "+ uu);
    for (let i = uu + 1; i < e; i++) {
        console.log("i:"+i);
        let q = i - 1;
        let qq = "test" + q;
        list[i].firstChild.setAttribute("id", qq);
    }
    list[uu].remove();
    llist[uu].remove();
    // alert(e);


    u = u - 1;
    console.log("u del:"+u);
    document.getElementById("count1").innerHTML = u;
    //console.log(uu);
    return;
}