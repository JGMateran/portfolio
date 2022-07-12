import {
  Linkedin,
  GitHub,
  Twitter
} from 'react-feather'

export function Social () {
  return (
    <div className="flex items-center space-x-2">
      <a href="https://www.linkedin.com/in/reburning" target="_blank" rel="noopener noreferrer" className="p-2 focus:outline-none focus-visible:ring-2">
        <Linkedin />
      </a>
      <a href="https://www.github.com/JGMateran" target="_blank" rel="noopener noreferrer" className="p-2 focus:outline-none focus-visible:ring-2">
        <GitHub />
      </a>
      <a href="https://www.twitter.com/reburn_dev" target="_blank" rel="noopener noreferrer" className="p-2 focus:outline-none focus-visible:ring-2">
        <Twitter />
      </a>
    </div>
  )
}
