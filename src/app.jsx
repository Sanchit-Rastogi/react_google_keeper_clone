import React from 'react';
import Card from './propsComponent/card';
import Contacts from './propsComponent/contacts';

function App() {
    return <div>
        <h1 className="heading">My Contacts</h1>
        <Card name="Elon" image="https://cdn.vox-cdn.com/thumbor/3xHimsvroG5H6n9pT4wBr8Gf2UY=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67108186/elon_musk_tesla_3036.0.jpg" tel="1234567890" email="elon@gmail.com" />
        <Card name={Contacts[0].name} image={Contacts[0].imgURL} tel={Contacts[0].phone} email={Contacts[0].email} />
        <Card name={Contacts[1].name} image={Contacts[1].imgURL} tel={Contacts[1].phone} email={Contacts[1].email} />
        <Card name={Contacts[2].name} image={Contacts[2].imgURL} tel={Contacts[2].phone} email={Contacts[2].email} />
    </div>
}

export default App;