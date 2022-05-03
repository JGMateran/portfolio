import {
  Linkedin,
  GitHub,
  Twitter
} from 'react-feather'

export function Social () {
  return (
    <div className="flex items-center space-x-2">
      <a className="p-2 focus:outline-none focus-visible:ring-2" href="#">
        <Linkedin />
      </a>
      <a className="p-2 focus:outline-none focus-visible:ring-2" href="#">
        <GitHub />
      </a>
      <a className="p-2 focus:outline-none focus-visible:ring-2" href="#">
        <Twitter />
      </a>
    </div>
  )
}
