import Button from "../components/Button.js"
import {GoBell,GoCode,GoDatabase} from 'react-icons/go'
import Sidebar from '../components/SideBar';

function ButtonPage(){
  return<div>
        <Sidebar />

  <div>
    <Button success  rounded outline>
      <GoBell  />
      Click me!!
    </Button>
  </div>
  <div>
    <Button danger outline >
      <GoCode  />
      Buy Now!
    </Button>
  </div>
  <div>
    <Button warning> <GoDatabase  /> See Deal!</Button>
  </div>
  <div>
    <Button secondary outline>
      Hide Ads!
    </Button>
  </div>
  <div>
    <Button primary rounded>
      Something!
    </Button>
  </div>
</div>
}
export default ButtonPage