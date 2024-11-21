console.log(document);

function testTheDom() {
    console.log("testing the dom");

    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for (let node of nodes) {
        console.log(node.textContent);
    }

    var checkingNode = document.getElementById("checking");
    //console.log(checkingNode.textContent);
    //checkingNode.textContent = "Changed!";
    balance = parseInt(checkingNode.textContent);
    console.log(balance);
    balance += 100;
    checkingNode.textContent = balance;
}