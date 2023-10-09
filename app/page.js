import Link from 'next/link';
import StudentInfo from './StudentInfo';
export default function Page()
    {
        return (
            <div>
                <h1>CPRG 306: Web Development 2 - Assigments </h1>
                <StudentInfo/>
                <Link href="\week2">week2</Link>
                <p></p>
                <Link href="\week3">week3</Link>
                <p></p>
                <Link href="\week4">week4</Link>
            </div>  
        )
    }     
