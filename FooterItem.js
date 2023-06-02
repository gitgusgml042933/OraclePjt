import FooterMenu from "./FooterMenu";

const FooterItem = () => {
    return(
        <>
            <ul>
                <FooterMenu url='#none' name='Developer Services'/>
                <FooterMenu url='#none' name='Integration'/>
                <FooterMenu url='#none' name='Analytics and BI'/>
                <FooterMenu url='#none' name='Machine Learning'/>
                <FooterMenu url='#none' name='Big Data'/>
                <FooterMenu url='#none' name='Compute'/>
            </ul>
            <ul>
                <FooterMenu url_='#none' name='Storage'/>
                <FooterMenu url_='#none' name='Containers and'/>
                <FooterMenu url_='#none' name='Networking'/>
                <FooterMenu url_='#none' name='Oracle Databases'/>
                <FooterMenu url_='#none' name='Open Source'/>
                <FooterMenu url_='#none' name='Native VMware'/>
            </ul>    
        

            
        </>
        

    );
}

export default FooterItem;