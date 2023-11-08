'use client'
import React, { useEffect , useState} from 'react'
import { getAllProductsApi } from '../api/customApi';
import Loader from './Loader';
import { useRouter } from 'next/navigation';

const Home = ({setIsLoading}) => {

  const [products, setProducts] = useState([]);
 const router = useRouter();

  const fetchAllProducts = async() => {
   const res  =  await getAllProductsApi()
   setProducts(res.data)
   setIsLoading(false)
  }
  useEffect(()=>{
    if(localStorage.getItem("token")){
    fetchAllProducts();
    }else{
      router.push("/login")
    }
  },[])

  if(products.length === 0){
    return (<Loader />)
  }
  return (
                <>
                <section className="banner-style-one">
                  <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}} />
                  <div className="banner-carousel owl-theme owl-carousel">
                    <div className="slide-item">
                      <div className="auto-container">
                        <div className="content-inner">
                          <div className="content-box">
                            <h1>Up To <br /><span>50%</span> Discount</h1>
                            <h3>Summer Lookbook - 2020</h3>
                            <p>{`New Modern Stylist Fashionable Men's Wear Jeans Shirt.`}</p>
                            <div className="btn-box">
                              <a href="/" className="theme-btn-one">Explore Now<i className="flaticon-right-1" /></a>
                            </div>
                          </div>
                          <figure className="image-box image-1"><img src="assets/images/banner/banner-image-1.png" alt="" /></figure>
                        </div> 
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="auto-container">
                        <div className="content-inner">
                          <div className="content-box">
                            <h1>Up To <br /><span>50%</span> Discount</h1>
                            <h3>Summer Lookbook - 2020</h3>
                            <p>{`New Modern Stylist Fashionable Men's Wear Jeans Shirt.`}</p>
                            <div className="btn-box">
                              <a href="/" className="theme-btn-one">Explore Now<i className="flaticon-right-1" /></a>
                            </div>
                          </div>
                          <figure className="image-box image-2"><img src="assets/images/banner/banner-image-2.png" alt="" /></figure>
                        </div> 
                      </div>
                    </div>
                    <div className="slide-item">
                      <div className="auto-container">
                        <div className="content-inner">
                          <div className="content-box">
                            <h1>Up To <br /><span>50%</span> Discount</h1>
                            <h3>Summer Lookbook - 2020</h3>
                            <p>{`New Modern Stylist Fashionable Men's Wear Jeans Shirt.`}</p>
                            <div className="btn-box">
                              <a href="/" className="theme-btn-one">Explore Now<i className="flaticon-right-1" /></a>
                            </div>
                          </div>
                          <figure className="image-box imgae-3"><img src="assets/images/banner/banner-image-3.png" alt="" /></figure>
                        </div> 
                      </div>
                    </div>
                  </div>
                </section>
                {/* banner-section end */}
                {/* topcategory-section */}
                <section className="topcategory-section centred">
                  <div className="auto-container">
                    <div className="sec-title">
                      <h2>Top Category</h2>
                      <p>Follow the most popular trends and get exclusive items from castro shop</p>
                      <span className="separator" style={{backgroundImage: 'url(assets/images/icons/separator-1.png)'}} />
                    </div>
                    <div className="row clearfix">
                      <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <figure className="image-box"><img src="assets/images/resource/category-1.png" alt="" /></figure>
                          <h5><a href="/">Women Collections</a></h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <figure className="image-box"><img src="assets/images/resource/category-2.png" alt="" /></figure>
                          <h5><a href="/">Kids Collections</a></h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                          <figure className="image-box"><img src="assets/images/resource/category-3.png" alt="" /></figure>
                          <h5><a href="/">Summer Collections</a></h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                          <figure className="image-box"><img src="assets/images/resource/category-4.png" alt="" /></figure>
                          <h5><a href="/">Gents Collections</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* topcategory-section end */}
                {/* shop-section */}
                <section className="shop-section">
                  <div className="auto-container">
                    <div className="sec-title">
                      <h2>Our Top Collection</h2>
                      <p>There are some product that we featured for choose your best</p>
                      <span className="separator" style={{backgroundImage: 'url(assets/images/icons/separator-1.png)'}} />
                    </div>
                    <div className="sortable-masonry">
                      <div className="filters">
                        <ul className="filter-tabs filter-btns centred clearfix">
                          <li className="active filter" data-role="button" data-filter=".best_seller">Best Seller</li>
                          <li className="filter" data-role="button" data-filter=".new_arraivals">New Arraivals</li>
                          <li className="filter" data-role="button" data-filter=".top_rate">Top Rate</li>
                        </ul>
                      </div>
                      <div className="items-container row clearfix">
                        {products.length > 0 && products.map((product, index)=>(<div key={index}  className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
                          <div className="shop-block-one">
                            <div className="inner-box">
                              <figure className="image-box image-box-product">
                                <img src={product?.image} alt="product image" height="400px" />
                                <ul className="info-list clearfix">
                                  <li><a href="/"><i className="flaticon-heart" /></a></li>
                                  <li><a href="product-details.html">Add to cart</a></li>
                                  <li><a href="assets/images/resource/shop/shop-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search" /></a></li>
                                </ul>
                              </figure>
                              <div className="lower-content">
                                <a href="product-details.html">{product.name}</a>
                                <span className="price">${product.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>))}
                        
                      </div>
                    </div>
                    <div className="pagination-wrapper centred">
                      <ul className="pagination clearfix">
                        <li><a href="/">Prev</a></li>
                        <li><a href="/">1</a></li>
                        <li><a href="/" className="active">2</a></li>
                        <li><a href="/">3</a></li>
                        <li><a href="/">4</a></li>
                        <li><a href="/">5</a></li>
                        <li><a href="/">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/* shop-section end */}
                {/* cta-section */}
                <section className="cta-section">
                  <div className="image-layer" style={{backgroundImage: 'url(assets/images/background/cta-bg-1.jpg)'}} />
                  <div className="auto-container">
                    <div className="cta-inner centred">
                      <div className="pattern-layer">
                        <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-2.png)'}} />
                        <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-3.png)'}} />
                      </div>
                      <h2>End of Season Clearance Sale upto 50%</h2>
                      <p>Welcome to the new range of shaving products from master barber. We have over three decades of experience in the male grooming industry</p>
                      <a href="shop.html" className="theme-btn-one">Shop Now<i className="flaticon-right-1" /></a>
                    </div>
                  </div>
                </section>
                {/* cta-section end */}
                {/* service-section */}
                <section className="service-section">
                  <div className="auto-container">
                    <div className="inner-container">
                      <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="flaticon-truck" /></div>
                              <h3><a href="/">Free Shipping</a></h3>
                              <p>Free shipping on oder over $100</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="flaticon-credit-card" /></div>
                              <h3><a href="/">Secure Payment</a></h3>
                              <p>We ensure secure payment with PEV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="flaticon-24-7" /></div>
                              <h3><a href="/">Support 24/7</a></h3>
                              <p>Contact us 24 hours a day, 7 days a week</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="flaticon-undo" /></div>
                              <h3><a href="/">30 Days Return</a></h3>
                              <p>Simply return it within 30 days for an exchange.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* service-section end */}
                {/* instagram-section */}
                <section className="instagram-section">
                  <div className="outer-container">
                    <div className="sec-title">
                      <h2>Follow Us On Instagram</h2>
                      <p>Excepteur sint occaecat cupidatat</p>
                      <span className="separator" style={{backgroundImage: 'url(assets/images/icons/separator-1.png)'}} />
                    </div>
                    <div className="six-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                      <figure className="image-box">
                        <img src="assets/images/resource/instagram-1.jpg" alt="" />
                        <ul className="info-list clearfix">
                          <li><a href="index-2.html"><i className="flaticon-heart" />450</a></li>
                          <li><a href="index-2.html"><i className="flaticon-commentary" />320</a></li>
                        </ul>
                      </figure>
                      <figure className="image-box">
                        <img src="assets/images/resource/instagram-2.jpg" alt="" />
                        <ul className="info-list clearfix">
                          <li><a href="index-2.html"><i className="flaticon-heart" />450</a></li>
                          <li><a href="index-2.html"><i className="flaticon-commentary" />320</a></li>
                        </ul>
                      </figure>
                      <figure className="image-box">
                        <img src="assets/images/resource/instagram-3.jpg" alt="" />
                        <ul className="info-list clearfix">
                          <li><a href="index-2.html"><i className="flaticon-heart" />450</a></li>
                          <li><a href="index-2.html"><i className="flaticon-commentary" />320</a></li>
                        </ul>
                      </figure>
                      <figure className="image-box">
                        <img src="assets/images/resource/instagram-4.jpg" alt="" />
                        <ul className="info-list clearfix">
                          <li><a href="index-2.html"><i className="flaticon-heart" />450</a></li>
                          <li><a href="index-2.html"><i className="flaticon-commentary" />320</a></li>
                        </ul>
                      </figure>
                      <figure className="image-box">
                        <img src="assets/images/resource/instagram-5.jpg" alt="" />
                        <ul className="info-list clearfix">
                          <li><a href="index-2.html"><i className="flaticon-heart" />450</a></li>
                          <li><a href="index-2.html"><i className="flaticon-commentary" />320</a></li>
                        </ul>
                      </figure>
                      <figure className="image-box">
                        <img src="assets/images/resource/instagram-6.jpg" alt="" />
                        <ul className="info-list clearfix">
                          <li><a href="index-2.html"><i className="flaticon-heart" />450</a></li>
                          <li><a href="index-2.html"><i className="flaticon-commentary" />320</a></li>
                        </ul>
                      </figure>
                    </div>
                  </div>
                </section>
               
          
        </>
      
  )
}

export default Home