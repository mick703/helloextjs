/**
 * Created with JetBrains PhpStorm.
 * User: ming
 * Date: 30/05/12
 * Time: 11:02 PM
 * To change this template use File | Settings | File Templates.
 */
//Ext.onReady(function(){Ext.MessageBox.alert('Hello','The Dom is ready')});
var myForm = new Ext.form.FormPanel(
    {
        id:     'myForm',
        region: 'center',
        layout: 'form',
        border: true,
        autoHeight: true,
        items: [{
            id: 'segments',
            xtype: 'checkboxgroup',
            fieldLabel: 'segments',
            border: true,
            items: [
                {boxLabel: 'Male', inputValue: 1, name: 'segments[]'},
                {boxLabel: 'Female',inputValue: 2, name: 'segments[]'},
                {boxLabel: 'Kids',inputValue: 3, name: 'segments[]'}
            ],
            column:1,
            width: 250
        }]
    });

Ext.onReady(function(){
//    var myDiv1 = Ext.get('div1');
//    myDiv1.setHeight(20
//    myDiv1.setSize(350,350,{duration: 1, easing:'bounceOut'});
//    myDiv1.createChild('child from a string');
//    myDiv1.createChild('<div>element form an element</div>');
//    myDiv1.createChild({
//        tag:'p',
//        id: 'nestedP',
//        style:'border: 1px dashed; padding: 5px;',
//        children:{
//            tag: 'span',
//            html:'span in side a p',
//            style: 'color: red; border: 1px solid blue'
//        }
//    });
//    myDiv1.createChild('<div>second childed inserted</div>', myDiv1.dom.childNodes[1]);
    myForm.getComponent('segments').setValue([true,false,true]);
    var checkboxes = myForm.getComponent('segments').getValue();
    console.log(checkboxes);
    for(var i= 0;i<checkboxes.length;i++){
        console.log('he');
        console.log(checkboxes[i].getValue());
    }

    myForm.render('form1');

    var myTpl = new Ext.Template("<div>Hello, {0}</div>");
    myTpl.append(document.body, ['Marjan']);

    var complextemplate = new Ext.Template(
        '<div style="background-color: {color}; margin: 10;">',
        '<b> Name :</b> {name}<br />',
        '<b> Age :</b> {age}<br />',
        '<b> DOB :</b> {dob}<br />',
        '</div>'
     );
    complextemplate.compile();
    complextemplate.append(document.body,{
        color : "#E9E9FF",
        name : 'John Smith',
        age
            : 20,
        dob
            : '10/20/89'
    });

    //xtemplate
    var tplData = [{
        color : "#FFE9E9",
        name : 'Naomi White',
        age : 25,
        dob  : '03/17/84',
        cars : ['Jetta', 'Pilot', 'S2000']
    },{
        color : "#E9E9FF",
        name : 'John Smith',
        age : 20,
        dob : '10/20/89',
        cars : ['Civic', 'Accord', 'Pilot']
    }];
    var xtpl1 = new Ext.XTemplate(
        '<tpl for=".">',
        '<div style="background-color: {color}; margin: 10;">',
        '<b> Name :</b> {name}<br />',
        '<b> Age :</b> {age}<br />',
        '<b> DOB :</b> {dob}<br />',
        '</div>',
        '</tpl>'
    );
    xtpl1.compile();
    xtpl1.append(document.body, tplData);


});
