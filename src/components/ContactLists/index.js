import {
  BsInstagram,
  BsTwitter,
  BsSnapchat,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs'

const ContactsList = [
  {
    id: 1,
    ContactType: 'LinkedIn',
    ContactIcon: <BsLinkedin size={40} />,
    ContactScanner:
      'https://res.cloudinary.com/reddyimgs/image/upload/v1691398881/qrcode_www.linkedin.com_dn68xe.png',
    ContactLink: 'https://www.linkedin.com/in/bandam-harshith-reddy-26725b232/',
  },
  {
    id: 2,
    ContactType: 'Instagram',
    ContactIcon: <BsInstagram size={40} />,
    ContactScanner:
      'https://res.cloudinary.com/reddyimgs/image/upload/v1691397402/_bandam_harshith_reddy__qr_vz6fqb.png',
    ContactLink:
      'https://instagram.com/_bandam_harshith_reddy_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
  },
  {
    id: 3,
    ContactType: 'Twitter',
    ContactIcon: <BsTwitter size={40} />,
    ContactScanner:
      'https://res.cloudinary.com/reddyimgs/image/upload/v1691399332/qrcode_twitter.com_paw48x.png',
    ContactLink: 'https://twitter.com/HARSHITH_1629',
  },
  {
    id: 4,
    ContactType: 'Snapchat',
    ContactIcon: <BsSnapchat size={40} />,
    ContactScanner:
      'https://res.cloudinary.com/reddyimgs/image/upload/v1691399524/365485398_669469625039240_8338569899578386088_n_tpvbdj.jpg',
    ContactLink:
      'https://l.instagram.com/?u=https%3A%2F%2Fwww.snapchat.com%2Fadd%2Fharshith1629%3Fshare_id%3Da7-JluE_qdI%26locale%3Den-US&e=AT2VeOCCirL6kq2R4k6JdD9ko7bemD5eFoi95ey36PK9GUPFDZsQx2NGnd_o65_u3cO0gfSrQWZ3gDMPBgKKRWEuyGeXqtkQYLhGOAU9k20DRU3EFdAfP2NRD55n4Vdk7jRwVa2bEautb6bmpVGl0Q',
  },
  {
    id: 5,
    ContactType: 'Github',
    ContactIcon: <BsGithub size={40} />,
    ContactScanner:
      'https://res.cloudinary.com/reddyimgs/image/upload/v1691399682/qrcode_github.com_ilwqqf.png',
    ContactLink: 'https://github.com/Harshith-reddy1629',
  },
  //   {
  //     id: 6,
  //     ContactType: 'Gmail',
  //     ContactIcon: <BiLogoGmail size={40} />,
  //     ContactScanner: '',
  //     ContactLink: '',
  //   },
]

export default ContactsList
