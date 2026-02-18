import React from "react";
import ReactDOM from "react-dom/client";

const resData = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1257079",
          name: "Dum Safar Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/19/df808c26-afab-4d22-8a55-ac265460e318_757a05a0-c746-41fe-87e3-4a18002ed0fa.png",
          locality: "Regal Building",
          areaName: "Connaught Place",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
          avgRating: 4.5,
          parentId: "351013",
          avgRatingString: "4.5",
          totalRatingsString: "100",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-18 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹110",
            headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
            secondaryDiscountCallout: "₹30 Cashback",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1257079&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "8620",
          name: "Biryani Blues",
          cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Lucknowi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.3,
          parentId: "13813",
          avgRatingString: "4.3",
          totalRatingsString: "32K+",
          promoted: true,
          adTrackingId:
            "cid=01db5277-c4e1-454b-b711-f323104bcb79~p=2~adgrpid=01db5277-c4e1-454b-b711-f323104bcb79#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=8620~plpr=COLLECTION~eid=a315c2af-0472-4d16-8924-19936935261c~srvts=1771395465803~collid=83639",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-19 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "3.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "01db5277-c4e1-454b-b711-f323104bcb79",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=8620&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1155658",
          name: "GharSe - Homestyle & Healthy Tiffins",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/16e426af-1bf7-47b4-a96e-71aa61cb55be_1155658.JPG",
          locality: "E-2/27",
          areaName: "KAROL BAGH",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "Thalis", "Home Food"],
          avgRating: 4.4,
          parentId: "663389",
          avgRatingString: "4.4",
          totalRatingsString: "82",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-19 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1155658&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "699760",
          name: "One Tap Biryani",
          cloudinaryImageId: "0975248e1864211d30193c07cb20bb59",
          locality: "Lakshmi Narayan St",
          areaName: "Karol Bagh",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "North Indian", "Snacks"],
          avgRating: 4.2,
          parentId: "418193",
          avgRatingString: "4.2",
          totalRatingsString: "344",
          promoted: true,
          adTrackingId:
            "cid=2e61945c-57e7-4fa7-871d-54916172f54d~p=5~adgrpid=2e61945c-57e7-4fa7-871d-54916172f54d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=699760~plpr=COLLECTION~eid=f9894cdd-edc3-40f1-992e-1b2631175305~srvts=1771395465803~collid=83639",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-18 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "2e61945c-57e7-4fa7-871d-54916172f54d",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=699760&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, areaName, costForTwo, cuisines, avgRating, cloudinaryImageId, sla } = resData;
  return (
    <div className="restro-card">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt="res-image"
        className="res-image"
      />
      <h3>{name}</h3>
      <h3>{areaName}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{sla.deliveryTime}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {console.log(resData)}
        {
            resData.map(restro => <RestaurantCard key={restro.card.card.info.id} resData={restro.card.card.info} />)
        }
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <Body />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
