import React from 'react'
const FooterComponent = () => {
    return(
        <footer style={{width : '100%' , color : '#fff' , background  : '#000' }}  className="fixed-bottom">
            <p className="pt-2 text-center">CopyRight &copy; 2020 - Bool</p>
        </footer>
    )
}
export default React.memo(FooterComponent)