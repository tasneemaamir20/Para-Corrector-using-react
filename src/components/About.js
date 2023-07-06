import React from 'react';



// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */

const About = (props) => {
  let myStyle={
    color:props.mode==='dark'?'white':'#040826',
    backgroundColor:props.mode==='dark'?'#040826':'white',
    border:'2px solid',
    borderColor:props.mode==='dark'?'#040826':'white'
  }
//   const [myStyle, setMyStyle] = useState(
//  {
//     color:'black',
//     backgroundColor:'white'
//   })
  // const [btnText, setBtnText] = useState('Enable Dark Mode')
  // const darkOnClick=()=>
  // {
  //   if(myStyle.color === 'black'){
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setBtnText('Enable Light Mode')
  //   }
  //   else{
  //     setMyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtnText('Enable Dark Mode')
  //   }
  // }
  return <div className='container' style={myStyle}>
                <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
               <div className="accordion-item">
               <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
              </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Myproject gives you a way to analyze your text quickly and efficiently. Be it word count, character count ,copy written text, change it to upper and lower case.
               </div>
              </div>
              </div>
              <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Myproject is  a free character counter tool that provide instant character count and word count statistics for 
                a given text. Myproject reports the number of words charcaters. thus it suitable for writing text with word/ character limit.

                </div>
              </div>
              </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Browser compatible</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as chrome , firefox, Internet Explorer.
                It suits to count character in facebook, blog,books,excel document etc.
                </div>
            </div>
          </div>
        </div>
{/* <button className="btn btn-primary" onClick={darkOnClick}>{btnText}</button> */}
    </div>
    ;
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;
// #endregion

export default About;