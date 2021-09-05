import React from "react"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import {FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { DiPhotoshop } from "react-icons/di";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
    },
    {
        id: 3,
        url: '/services',
        text: 'Services',
    },
    {
        id: 4,
        url: '/skills',
        text: 'Skills',
    },
    {
        id: 5,
        url: '/teams',
        text: 'Teams',
    },
    {
        id: 6,
        url: '/contact',
        text: 'Contact',
    },
]

export const social =[
    {
        id: 1,
        url: 'https://www.facebook.com/NABILMASUDH/',
        icon: <FaFacebookF />,
    },
    {
        id: 2,
        url: 'https://twitter.com/NMasudh',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.linkedin.com/in/nabil-masud/',
        icon: <FaLinkedinIn />,
    },
    {
        id: 4,
        url: 'https://github.com/nabilmasudh',
        icon: <FaGithubSquare />,
    },
    {
        id: 5,
        url: 'https://www.instagram.com/nabil.masudh565/',
        icon: <FaInstagramSquare />,
    },
]

export const teams = [
    {
        id:1,
        image:'../image/image2.png',
        name:'MASUDH',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo dignissimos ipsum ex minima inventore possimus fuga ut fugiat at.',
    },
    {
        id: 2,
        image: '../image/image2.png',
        name: 'RAKIB',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo dignissimos ipsum ex minima inventore possimus fuga ut fugiat at.',
    },
    {
        id: 3,
        image: '../image/image2.png',
        name: 'AZAD',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo dignissimos ipsum ex minima inventore possimus fuga ut fugiat at.',
    },
]
export const abouts = [
    {
        id:1,
        image:'../image/image2.png',
        info: 'Im Masudh and im a web developer',
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error at aliquid aspernatur quasi sint alias optio ipsum, harum id maxime saepe! Eveniet cumque eaque, deleniti rem error officia officiis repellendus magnam fuga est aut sit, quo dolorem voluptatum nesciunt commodi mollitia, ut obcaecati repellat inventore eligendi similique! Hic cumque pariatur sed minima magnam tempora asperiores praesentium doloribus fugiat, autem doloremque deserunt blanditiis rem quidem quaerat voluptates distinctio reiciendis eligendi iusto minus. Voluptatibus recusandae, aliquam eum expedita maxime optio nesciunt modi',
    },
]

export const services = [
    {
        id:1,
        icon: <CgWebsite/>,
        title:'web design with html and css',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quae laudantium qui recusandae perspiciatis molestiae perferendis, debitis distinctio sapiente, magnam magni quisquam facere officiis esse assumenda voluptate unde veritatis nihil.',

    },
    {
        id: 2,
        icon: <FaReact />,
        title: 'frontend development with React',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quae laudantium qui recusandae perspiciatis molestiae perferendis, debitis distinctio sapiente, magnam magni quisquam facere officiis esse assumenda voluptate unde veritatis nihil.',

    },
    {
        id: 3,
        icon: <DiPhotoshop />,
        title: 'graphics design',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quae laudantium qui recusandae perspiciatis molestiae perferendis, debitis distinctio sapiente, magnam magni quisquam facere officiis esse assumenda voluptate unde veritatis nihil.',

    },
]

export const skills = [
    {
        id:1,
        title: 'My creative skills',
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias architecto quas voluptatum nulla qui atque, error, consequatur voluptatem ea similique repellat minima ex voluptatibus dolorum ipsum eius rerum. Sapiente quia cum omnis distinctio rem, delectus fuga dolore, perspiciatis facere deserunt facilis culpa ad nobis eaque consequuntur quae, harum consequatur.',
    }
]

export const contact = [
    {
        id: 1,
        title: 'name :',
        value: 'NABIL MASUDH',
    },
    {
        id: 2,
        title: 'Address :',
        value: 'Bagerhat, Khulna',
    },
    {
        id: 2,
        title: 'Current Address :',
        value: 'Dhaka, Gazipur',
    },
    {
        id: 2,
        title: 'E-mail :',
        value: 'nabilmasudh@gmail.com',
    },
]