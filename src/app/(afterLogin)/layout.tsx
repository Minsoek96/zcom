const AfterLoginLayout = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>   
            <p>애프터로그인레이아웃</p>
            {children}
        </div>
    )
}

export default AfterLoginLayout