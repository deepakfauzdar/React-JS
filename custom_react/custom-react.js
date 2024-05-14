const mainComponent=document.getElementById("root");

const reactElement={
    type:'a',
    props:{
     href:'https://www.google.com',
     target:'_blank'
    },
    children:"Click here to visit Google.com"
}

function customRender(reactElement, component){
  const element=document.createElement(reactElement.type);
  element.innerText=reactElement.children;
//   element.setAttribute('href',reactElement.props.href);
//   element.setAttribute('target',reactElement.props.target);

//we will won repeat the code, we will use loop

for (const key in reactElement.props) {
     element.setAttribute(key,reactElement.props[key]);
    }

  document.body.appendChild(element);
}


customRender(reactElement,mainComponent);