<template>
  <div class="the-footer">
    <div class="container">
      <div class="logo">
        <img src="../../assets/image/Logo.png" alt="Logo nicespace" />
      </div>
      <div class="footer-content">
        <div class="footer-contact">
          <div class="footer-title">Cần hỗ trợ thêm?</div>
          <div class="footer-sub-title">Nhận tư vấn miễn phí từ chuyên gia</div>
          <div class="footer-contact-list">
            <a
              v-for="contact in contactList"
              :key="contact.id"
              :href="contact.href"
              :class="['footer-contact-item', contact.backgroundClass]"
              target="_blank"
            >
              <img :src="getImageUrl(contact.image)" :alt="contact.alt" />
            </a>
          </div>
        </div>
        <div class="footer-address">
          <div class="footer-title">Hệ thống cửa hàng</div>
          <div class="footer-address-list flex">
            <div
              class="footer-address-item flex"
              v-for="address in addressList"
              :key="address.id"
            >
              <div :class="['address-city', address.classCity]">
                {{ address.city }}
              </div>
              <div class="address-detail flex">
                <div class="address-detail-text">
                  {{ address.detailAddress }}
                </div>
                <div class="address-detail-map">
                  <a :href="address.href" target="_blank">Chỉ đường</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-payment">
          <div class="footer-title">Đa dạng thanh toán</div>
          <div class="list-payment flex">
            <div
              v-for="payment in paymentList"
              :key="payment.id"
              class="item-payment flex"
            >
              <img
                class="item-payment-text"
                :src="getImageUrl(payment.image)"
                :alt="payment.alt"
              />
              <div class="item-payment-text">{{ payment.text }}</div>
            </div>
          </div>
        </div>
        <div class="footer-social">
          <div class="footer-title">Nicespace trên social networks</div>
          <div class="list-social flex">
            <a
              v-for="social in socialList"
              :key="social.id"
              :href="social.href"
              target="_blank"
              class="item-social flex"
            >
              <img
                class="item-social-text"
                :src="getImageUrl(social.image)"
                :alt="social.alt"
              />
              <div class="item-social-text">{{ social.text }}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">© Nicespace 2022. All rights reserved.</div>
      <div class="copyright-image">
        <img src="../../assets/image/copyright.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactList: [
        {
          id: 1,
          href: "tel:1900633579",
          image: "head-set.png",
          backgroundClass: "background-head-set",
          alt: "head-set",
        },
        {
          id: 2,
          href: "https://zalo.me/3877075650294314763",
          image: "zalo.png",
          backgroundClass: "background-zalo",
          alt: "zalo contact",
        },
        {
          id: 3,
          href: "",
          image: "message.png",
          backgroundClass: "background-message",
          alt: "message contact",
        },
        {
          id: 4,
          href: "https://t.me/thinkprocommunity",
          image: "telegram.png",
          backgroundClass: "background-telegram",
          alt: "telegram contact",
        },
      ],
      addressList: [
        {
          id: 1,
          city: "SG",
          classCity: "SG",
          detailAddress: "Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh",
          href: "https://goo.gl/maps/Qu6ySmsGRvUp7ZfY8",
        },
        {
          id: 2,
          city: "SG",
          classCity: "SG",
          detailAddress: "95 Trần Thiện Chánh, Phuờng 12, Quận 10",
          href: "https://goo.gl/maps/V9gy89C1JDsALhH96",
        },
        {
          id: 3,
          city: "HN",
          classCity: "HN",
          detailAddress: "53 Thái Hà, Đống Đa",
          href: "https://g.page/r/CUspK01W2maXEBA",
        },
      ],
      paymentList: [
        {
          id: 1,
          text: "Chuyển khoản",
          alt: "transfer",
          image: "double-arow.png",
        },
        {
          id: 2,
          text: "Tiền mặt",
          alt: "cash",
          image: "money.png",
        },
        {
          id: 3,
          text: "",
          alt: "vnpay",
          image: "vnpay.png",
        },
        {
          id: 4,
          text: "",
          alt: "viet-qr",
          image: "viet-qr.png",
        },
        {
          id: 5,
          text: "Thẻ ATM",
          alt: "atm",
          image: "atm.png",
        },
        {
          id: 6,
          text: "Thẻ Quốc tế",
          alt: "global-card",
          image: "global-card.png",
        },
      ],
      socialList: [
        {
          id: 1,
          text: "Facebook",
          href: "https://www.facebook.com/thinkpro.vn",
          image: "facebook.png",
          alt: "facebook thinkpro",
        },
        {
          id: 2,
          text: "Youtube",
          href: "https://www.youtube.com/c/ThinkProVN",
          image: "youtube.png",
          alt: "youtube thinkpro",
        },
        {
          id: 3,
          text: "TikTok",
          href: "https://www.tiktok.com/@thinkpro.vn",
          image: "tiktok.png",
          alt: "tiktok thinkpro",
        },
        {
          id: 4,
          text: "Telegram",
          href: "https://t.me/thinkprocommunity",
          image: "telegram-pink.png",
          alt: "telegram thinkpro",
        },
      ],
    };
  },

  setup() {
    const getImageUrl = (name) => {
      return new URL(`../../assets/image/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
};
</script>

<style>
.the-footer {
  padding: 32px 0;
}

.footer-content {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f2f4;
}

.footer-title {
  font-size: 24px;
  line-height: 140%;
  margin-bottom: 16px;
}

.footer-sub-title {
  font-size: 14px;
  line-height: 21px;
}

.footer-contact-list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
}

.footer-contact-item {
  display: block;
  position: relative;
  height: 68px;
  width: 68px;
  border-radius: 50%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-contact-item-img {
  position: absolute;
}

.background-head-set {
  background-color: #2e3238;
}

.background-zalo {
  background-color: #0068ff;
}

.background-message {
  background: linear-gradient(
    220.97deg,
    #ff666d 8.67%,
    #9539fe 52.12%,
    #0191ff 87.37%
  );
}

.background-telegram {
  background: linear-gradient(203.2deg, #37aee2 21.67%, #1e96c8 70%);
}

.footer-address {
  width: 100%;
}

.footer-address-list {
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}

.footer-address-item {
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 10px;
  background: #f6f9fc;
  border-radius: 8px;
  width: calc(100% / 3);
}

.address-city {
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
}

.SG {
  color: #fc8800;
}

.HN {
  color: #7eae00;
}

.address-detail {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.address-detail-text {
  height: 42px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}

.address-detail-map a {
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #0077fa !important;
}

.address-detail-map:hover {
  cursor: pointer;
}

.list-payment,
.list-social {
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.item-payment,
.item-social {
  width: 164px;
  height: 52px;
  border: 1px solid #e6e8ea;
  border-radius: 8px;
  gap: 14px;
  justify-content: center;
  align-items: center;
}

.item-social:hover {
  cursor: pointer;
}

.item-payment-text,
.item-social-text {
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
}

.copyright {
  margin: 19px 0;
  font-size: 12px;
  line-height: 18px;
  color: #6b7075;
}

@media (max-width: 740px) {
  .footer-title {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 8px;
  }

  .footer-address-list {
    flex-direction: column;
  }

  .footer-address-item {
    gap: 8px;
    width: 100%;
  }

  .list-payment,
  .list-social {
    flex-wrap: wrap;
  }

  .item-payment,
  .item-social {
    width: calc(100% / 2 - 8px);
  }

  .footer-contact-list {
    gap: 28px;
  }
}
</style>
