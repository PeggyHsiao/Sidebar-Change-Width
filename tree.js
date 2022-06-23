$('#jstree_demo_div').jstree({ 'core' : {
      'data' : [
        { 
            "id": "1", 
            "parent": "#", 
            "icon": "./images/export--normal.svg",
            "text": "我是名稱很長很長很長很長很長的專案000001"
         },
         { 
            "id": "2", 
            "parent": "#", 
            "icon": "./images/export--normal.svg",
            "text": "我是名稱比較短的專案00000000002"
         },
         { 
            "id": "2-1", 
            "parent": "2", 
            "icon": "./images/header--menu--normal.svg",
            "text": "我是名稱很長很長很長很長很長的節點000001"
         },
         { 
            "id": "2-2", 
            "parent": "2", 
            "icon": "./images/header--menu--normal.svg",
            "text": "node002"
         },
         { 
            "id": "2-2-1", 
            "parent": "2-1", 
            "icon": "./images/header--menu--normal.svg",
            "text": "node002"
         },
        ]
    } });
    

$('#jstree_demo_div').on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });