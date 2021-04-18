import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router";
import ProductPagination from '../ProductPagination/ProductPagination';
import { ImageParalxComponent } from '../ImageParalxComponent/ImageParalxComponent';
import icon from "../../Assets/Images/descendant.png"

export const ProductListComponent= (props)=>{
    let history = useHistory();
    const [productData, setProductData] = useState([]);
    const[sorting,setSorting]= useState("asc");
    const [searchResultProducts, setSearchResultProducts] = useState([]);
    
    const[showPerPage, setPerPage]= useState(10);
    const[searchValue, setSearchValue]= useState();
   
    const handleViewMore= (e) =>{
        console.log("clicked >>>", props)
       history.push("/productdetails/" + e.id);
    }
    const handleSearch = (e)=>{
        const value = e.target.value.toLowerCase();
        const filteredProducts = productData.filter((p)=>{
            return p.title.toLowerCase().indexOf(value) >-1;
        });
        setSearchResultProducts(filteredProducts);
        setSearchValue(e.target.value);
    }
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })
    const onPaginationChange= (start, end)=>{
        console.log("start", start);
        console.log("end", end);
        setPagination({start:start, end:end})
    };

    useEffect(()=>{
        axios.get("https://demo3242833.mockable.io/getProductData").then(response=>{
            console.log(">>>>>>>>>>>",response);
            setProductData(response.data);
            setSearchResultProducts(response.data);
            // console.log(">>>>>>>>>>>",response.data);
            // console.log(">>>>>>>>>>>",productData);
        })
    },[])

    const handleSorting=()=>{debugger
        console.log("called method");
       var type ;
        if(sorting=== "asc"){
            type="dec";
        }else{
            type="asc";
        }
        if(type === "asc"){
           const sortedProducts = productData.sort((a,b)=>{
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
           });
           setSearchResultProducts(sortedProducts) 
        }else{
            const sortedProducts = productData.sort((a,b)=>{
                if(a.title > b.title) { return -1; }
                if(a.title < b.title) { return 1; }
                return 0;
           });
           setSearchResultProducts(sortedProducts) 
        }
        setSorting(type);
    }
return(
    <>
    <div>
        <div className="row">
            <ImageParalxComponent></ImageParalxComponent>
        </div>
        <div className="container">
            <div className="row product-operation-div">
                <div className="col-md-10 col-xs-8">
                    <input aria-label="Large" placeholder="Search here..." type="text" onChange={handleSearch} value={searchValue} style={{width: "100%", padding: "6px"}}/>
                </div>
                <div className="col-md-2 col-xs-4">
                    <div className="icon-div">
                        <img src={icon} alt="soring" style={{height: "24px"}} className="sorting-icon" onClick={handleSorting}/>
                    </div>
                </div>
            </div>
            <div className="row">
                {searchResultProducts.slice(pagination.start,pagination.end).map((post) => (
                <div className="col-6 col-md-3 mt-30 product-cart" key={post.id} onClick={()=>{handleViewMore(post)}}>
                    <img src={post.thumbnailUrl} className="card-img-top" alt={post.title.slice(0,6)} />
                    <div className="card-body">
                        <h5 className="card-title">{post.title.slice(0,6)}</h5>
                        <p className="card-text">{post.title}</p>
                        <div className="rel-position view-line">
                            <p>View More</p>
                            <div className="viewmore"></div>
                        </div>
                    </div>
                </div>
                ))} 
           </div>
           <div className="row mt-30">
                <ProductPagination showPerPage={showPerPage} 
                onPaginationChange={onPaginationChange}
                total={productData.length}></ProductPagination>
            </div>
        </div>
    </div>
    </>
)

} 