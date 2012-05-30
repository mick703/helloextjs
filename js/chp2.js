/**
 * Created with JetBrains PhpStorm.
 * User: ming
 * Date: 30/05/12
 * Time: 11:02 PM
 * To change this template use File | Settings | File Templates.
 */
//Ext.onReady(function(){Ext.MessageBox.alert('Hello','The Dom is ready')});
Ext.onReady(function(){
    var myDiv1 = Ext.get('div1');
    myDiv1.setHeight(200);
    myDiv1.setSize(350,350,{duration: 1, easing:'bounceOut'});
    myDiv1.createChild('child from a string');
    myDiv1.createChild('<div>element form an element</div>');
    myDiv1.createChild({
        tag:'p',
        id: 'nestedP',
        style:'border: 1px dashed; padding: 5px;',
        children:{
            tag: 'span',
            html:'span in side a p',
            style: 'color: red; border: 1px solid blue'
        }
    });
    myDiv1.createChild('<div>second childed inserted</div>' +
        '', myDiv1.dom.childNodes[1]);
});
