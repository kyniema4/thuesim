export default {
  // debug: true, //Define debug mode
  zIndex: 1,
  // n the following two configurations, use one of them to display the tab for "Upload Image". But don't use both at the same time! ! !
  uploadImgShowBase64: true,   // Save a picture with base64
  // uploadImgServer: '/upload', // upload image to server
  // uploadImgMaxSize: 3 * 1024 * 1024, // limit the image size to 3M
  // uploadImgMaxLength: 5, // limit up to 5 images at a time
  /*
  // Custom upload parameters
  uploadImgParams: {
    token: 'abcdef12345'  //The attribute value will be automatically encoded, no need to encode here
  },
  uploadImgHeaders: {
    'Accept': 'text/x-json'
  },
  */
  // uploadFileName: 'yourFileName', // Custom fileName
  // withCredentials: true, // withCredentials（Cross-domain delivery of cookies）
  // uploadImgTimeout: 3000, // change the timeout time to 3s
  /* //Custom prompt method
  customAlert = (info) => {
    alert('Custom prompt：' + info)
  },
  */

  // Customize the delay time for onchange trigger, default is 200 ms
  // onchangeTimeout: 1000, // unit ms
  // onchange = html => html,

  // onfocus = _ => {}; // Clicking on the rich text area will trigger the onfocus function to execute.
  // onblur = html => (); // Click outside the rich text area

  // pasteFilterStyle: false,  // Turn off paste style filtering
  // pasteIgnoreImg: true, // Ignore images in the pasted content
  // pasteTextHandle: context => content, // Custom processing of pasted text content

  /*
  // Custom configuration color (font color, background color)
  colors: [
    '#000000', '#eeece0', '#1c487f', '#4d80bf', '#c24f4a',
    '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#ffffff'
  ],
  */

  /*
  // Custom font
  fontNames: [
    'Song',
    'Microsoft ',
    'Arial',
    'Tahoma',
    'Verdana'
  ],
  */
  // menus: [], // Custom menu configuration
  /*
  [
    'head',  // title
    'bold',  // Bold
    'italic',  // italic
    'underline',  // underline
    'strikeThrough',  // strikeThrough
    'foreColor',  // foreColor
    'backColor',  // backColor
    'link',  // Insert link
    'list',  // list
    'justify',  // justify
    'quote',  // quote
    'emoticon',  // emoticon
    'image',  // image
    'table',  // table
    'video',  // video
    'code',  // code
    'undo',  // undo
    'redo',  // redo
  ],
  */
}
