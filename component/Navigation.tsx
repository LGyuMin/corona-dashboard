import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import classNames from 'classnames'

const StyledNav = styled.nav`
    width: 252px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100vh;
    position: fixed;
    background: #f8f8f8;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;

    h1 {
        margin-top: 50px;
        margin-bottom: 56px;
        padding-left: 48px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-left: 48px;
        li {
            display: flex;
            align-items: center;
            height: 40px;
            gap: 8px;
            a {
                color: #282828;
                &.active, &:hover {
                    font-weight: bold; 
                    color: #2878F0; 
                }
            }
        }
    }

`

interface IMenu {
    title: string
    alt: string
    src: string
    route: string
}

const menuList: IMenu[] = [
    {
        title: 'Dashboard',
        alt: 'dashboard icon',
        src: '/images/icon_dashboard.svg',
        route: '/dashboard'
    },
    {
        title: 'Research',
        alt: 'research icon',
        src: '/images/icon_research.svg',
        route: '/research'
    },
    {
        title: 'Members',
        alt: 'members icon',
        src: '/images/icon_members.svg',
        route: '/members'
    },
    {
        title: 'Insight',
        alt: 'insight icon',
        src: '/images/icon_insight.svg',
        route: '/insight'
    },
    {
        title: 'Calendar',
        alt: 'calendar icon',
        src: '/images/icon_calendar.svg',
        route: '/calendar'
    },
]

const Navigation = () => {
    const router = useRouter()
    return (
        <StyledNav>
            <h1>
                <Link href="/">
                    <Image
                        alt='DBDLAP main logo'
                        src="/images/logo.svg"
                        width="145"
                        height="24"
                    />
                </Link>
            </h1>
            <ul>
                {
                    menuList.map(item => (
                        <li 
                            key={item.route}
                        >
                            <Image
                                alt={item.alt}
                                src={item.src}
                                width="16"
                                height="16"
                            />
                            <Link 
                                href={item.route}
                                className={classNames({ active: router.asPath === item.route})}
                            >
                                { item.title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </StyledNav>
    )
}

export default Navigation