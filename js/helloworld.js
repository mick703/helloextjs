/**
 * Created with JetBrains PhpStorm.
 * User: ming
 * Date: 30/05/12
 * Time: 10:26 PM
 * To change this template use File | Settings | File Templates.
 */
function buildWindow(){
    var win = new Ext.Window({
       id: 'myWindow',
       title: 'My first Ext JS window',
       width: 300,
       height: 150,
       layout: 'fit',
       autoLoad: {
           url:'sayHi.html',
           scripts: true
       }
    });
    win.show();

}

Ext.onReady(buildWindow);