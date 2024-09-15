import Link from 'next/link'

export default function Footer() {
  const socialLinks = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']
  
  return (
    <footer>
      <div>
        <h3>Reach us</h3>
        <p>info@bihub.tech</p>
      </div>
      <div>
        <h3>Follow us</h3>
        {socialLinks.map((platform, index) => (
          <Link key={index} href={`https://${platform.toLowerCase()}.com/bihub`}>
            {platform}
          </Link>
        ))}
      </div>
      <div>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <p>©2024 BiHub Technology. All rights reserved.</p>
      </div>
    </footer>
  )
}