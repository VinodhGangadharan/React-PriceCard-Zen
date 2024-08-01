import './App.css'

// Card contains the structure and content for the Price Cards
function Card(props)
{

  const features = ["Single User", "50GB Storage", "Unlimited Public Projects", "Community Access",
  "Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"];

  let liststyle1= {opacity:1.0};
  let liststyle2= {opacity:0.5};  

  let listicon1 = "bi bi-check-lg";
  let listicon2 = "bi bi-x"; 

    //Contains elements to create subscription price card

  return (
    <>

<div className="col-lg-4">         
         <div className="card" > 
 <div className="card-body">
   <p className="hcolor">{props.value.subscription}</p>
   <h5 className="card-title">{props.value.price}</h5>
   <hr></hr>

   <ul style={{listStyleType:'none'}}>
    {
  features.map((feature,index) => {    
   if(props.value.subscription=="FREE" && index>=4)
   {
    return <li key={index} style={liststyle2}><span><i className={listicon2}></i></span>{feature}</li>
   }
   if(props.value.subscription=="PLUS" && index>=7)
    {
     return <li key={index} style={liststyle2}><span><i className={listicon2}></i></span>{feature}</li>
    }
   else
   {
    return <li key={index} style={liststyle1}><span><i className={listicon1}></i></span>{feature}</li>
   }
  })
}
    </ul>
  
 <button type="button" style={{width:"100%"}} className="btn btn-primary btn-lg">Subscribe</button>
 </div>
</div>      
         </div>

    </>
  )
}

// App component consists of three cards which was created dynamically and passed corresponding values through props

function App() { 
 const SubscriptionFree = {price:"$0/month", subscription:"FREE"};
 const SubscriptionPlus = {price:"$9/month", subscription:"PLUS"};
 const SubscriptionPro = {price:"$49/month", subscription:"PRO"};
  return (
    <>
    <div >
      <div className="container">
        <div className='row'>
<div className='col-lg-12'>
<h4> Choose your Plan</h4>  
</div>
        </div>
        <div className ="row justify-content-around">                
        <Card value={SubscriptionFree}/>
        <Card value={SubscriptionPlus}/>
        <Card value={SubscriptionPro}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
