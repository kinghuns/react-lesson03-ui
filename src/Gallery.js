// export default App;
import Button from '@mui/material/Button';
import * as React from 'react';

export function Profile() {
  return (
      <div>
        <img
            src="https://wordsmusicandnews.com/wp-content/uploads/2020/02/Katherine_Johnson_1983-819x1024.jpg"
            height= "10%"
            width = "10%"
            alt="Katherine Johnson"
        />
        <div>
          <Button variant="contained">Hello world</Button>
        </div>
      </div>
  )
}

export default function Gallery() {
  return (
      <section>
        <h1>Amazing Scientist</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
  )
}