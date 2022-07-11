import React from 'react'
  import "./robots.css"
import { Card } from 'react-bootstrap';  
import { robots } from './robots';
import CardGroup from 'react-bootstrap/CardGroup';
export const R= () => {
  return ( 
    
   <div  className='h'>
    <CardGroup className='r'>
    

    <Card  >
      <Card.Img variant="top" src={'https://robohash.org/6'} />
      <Card.Body>
        <Card.Title>vineeth</Card.Title>
        <Card.Text>
          vineethkumar95@gmail.com
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card >
      <Card.Img variant="top" src={"https://robohash.org/${}"} />
      <Card.Body>
        <Card.Title>vinay</Card.Title>
        <Card.Text>
         vinay@gamil.com
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card >
      <Card.Img variant="top" src="https://robohash.org/hhjekl" />
      <Card.Body>
      <Card.Title>sai</Card.Title>
        <Card.Text>
        sai@gmail.com
        </Card.Text>

        
      </Card.Body>
    </Card> 
    <Card >
      <Card.Img variant="top" src="https://robohash.org/lkke" />
      <Card.Body>
      <Card.Title>Venkat</Card.Title>
        <Card.Text>
        venkat@gmail.com
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src="https://robohash.org/}" />
      <Card.Body>
      <Card.Title>{robots[2].name }</Card.Title>
        <Card.Text>
         { robots[2].email}
        </Card.Text>
        
      </Card.Body>
    </Card>  
    </CardGroup > 
    <CardGroup className="r">
     <Card  >
      <Card.Img variant="top" src={'https://robohash.org/kjhiu'} />
      <Card.Body>
        <Card.Title>{robots[5].name }</Card.Title>
        <Card.Text>
        { robots[5].email}
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card >
      <Card.Img variant="top" src={"https://robohash.org/ukue"} />
      <Card.Body>
        <Card.Title>{robots[7].name }</Card.Title>
        <Card.Text>
         { robots[7].email}
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card >
      <Card.Img variant="top" src="https://robohash.org/iee" />
      <Card.Body>
      <Card.Title>{robots[4].name }</Card.Title>
        <Card.Text>
        { robots[4].email}
        </Card.Text>

        
      </Card.Body>
    </Card> 
    <Card >
      <Card.Img variant="top" src="https://robohash.org/memre" />
      <Card.Body>
      <Card.Title>{robots[9].name } </Card.Title>
        <Card.Text>
        { robots[9].email}
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src="https://robohash.org/utle" />
      <Card.Body>
      <Card.Title>{robots[8].name }</Card.Title>
        <Card.Text>
        { robots[8].email}
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    </CardGroup>

    </div>

  
  )
}
