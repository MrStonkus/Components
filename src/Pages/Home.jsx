import React from 'react'
import Button from '../Components/Button'
import Modal from '../Components/Modal'

const Home = () => {
    const [show, setShow] = React.useState(false)

    return (
        <div className="container">
            <h2>React components:</h2>
            <fieldset>
                <legend className="comp__title">&quot;Button&quot;</legend>
                <div className="comp__group">
                    <Button className="cust-btn cust-btn-primary">Primary</Button>
                    <Button className="cust-btn cust-btn-secondary">Secondary</Button>
                    <Button className="cust-btn cust-btn-success">Success</Button>
                    <Button className="cust-btn cust-btn-danger">Danger</Button>
                    <Button className="cust-btn cust-btn-warning">Warning</Button>
                    <Button className="cust-btn cust-btn-info">Info</Button>
                    <Button className="cust-btn cust-btn-light">Light</Button>
                    <Button className="cust-btn cust-btn-dark">Dark</Button>
                    <Button className="cust-btn cust-btn-link">Link</Button>
                </div>
                <span className="text-muted"> You can use any Bootstrap style name, just add &quot;cust-&quot; prefix to the standard Bootstrap style name. </span>
                <a className="btn btn-primary" href="https://getbootstrap.com/docs/5.1/components/buttons/" target="blank" role="button">Styles</a>
            </fieldset>
            <fieldset>
                <legend className="comp__title">&quot;Modal&quot;</legend>
                <div className="comp__group">
                    <Button className="cust-btn cust-btn-success" onClick={() => setShow(true)}>Open modal</Button>
                    <Modal show={show} onClose={() => setShow(false)}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eligendi cum et nam suscipit numquam fugiat deserunt, nulla tempore fugit architecto itaque ex delectus quae.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eligendi cum et nam suscipit numquam fugiat deserunt, nulla tempore fugit architecto itaque ex delectus quae.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eligendi cum et nam suscipit numquam fugiat deserunt, nulla tempore fugit architecto itaque ex delectus quae.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eligendi cum et nam suscipit numquam fugiat deserunt, nulla tempore fugit architecto itaque ex delectus quae.
                        </p>
                    </Modal>
                </div>
                <span className="text-muted"> For more info, read readme.md file in component folder: </span>
                <a className="btn btn-primary" href="#" target="blank" role="button">Modal</a>

            </fieldset>
        </div>
    )
}

export default Home
