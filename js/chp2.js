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
                {boxLabel: 'Female',inputValue: 2, name: 'segments[]'}
            ],
            column:1,
            width: 250
        }]
    });

Ext.onReady(function(){
//    var myDiv1 = Ext.get('div1');
//    myDiv1.setHeight(200);
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
    myForm.getComponent('segments').setValue([1]);
    myForm.render('form1');
});
