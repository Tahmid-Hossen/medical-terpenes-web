import React from 'react';

const WholesaleProductModal = ({show, onHide, productId, wishlistitem, compareitem, cartitem}) => {
    const onCloseModal = () => {
        setThumbsSwiper(null);
        onHide();
        // Reset states to initial values
        setSelectedProductFormula(product?.variation ? product?.variation?.[0]?.formula : '');
        setSelectedProductVolume(product?.variation ? product?.variation?.[0]?.volume?.[0]?.name : '');
        setProductStock(product?.variation ? product?.variation?.[0]?.volume?.[0]?.stock : product?.stock);
        setQuantityCount(1);
        setProductPrice(0);
        setDiscountedPrice(0);
    };
    return (
        <div>

        </div>
    );
};

export default WholesaleProductModal;