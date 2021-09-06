
const sear = document.getElementById("link");
const ele = document.getElementById("searchbox");
ele.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
      search()
    }
  })

function search()
{
    const input =  ele.value;
    window.location.href = "https://www.google.co.in/search?q="+input+"&sxsrf=AOaemvLfNbZlIf_uaShmq38rtZBFTwMIzA%3A1630924883697&source=hp&ei=U_A1YYXDKPDD5OUPqfi_oAo&iflsig=ALs-wAMAAAAAYTX-Y1qW712-UXODWNbFNyjsZlz6h4mk&oq="+input+"&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCAgAEIAEELEDMggIABCABBCxAzIICC4QgAQQsQMyBQguEIAEMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIICC4QgAQQsQM6CAguELEDEIMBOggIABCxAxCDAToLCC4QgAQQxwEQ0QM6DgguEIAEELEDEMcBEKMCUNEHWLsNYNEQaABwAHgBgAHiAYgBmwaSAQUwLjEuM5gBAKABAQ&sclient=gws-wiz&ved=0ahUKEwjFuOLSlOryAhXwIbkGHSn8D6QQ4dUDCAc&uact=5";
} 