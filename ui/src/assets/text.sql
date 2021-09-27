
select bc.customer_name,bi.customer_num,(bi.CUSTOMER_NUM || bi.CONS_CHK_DIGIT) AS CONSUMER_NUMBER,SUBSTR(bi.AREA_CODE, 1, 3) AS BOOK_NO,
c.prn,c.lps,c.vat,c.total,c.duestotal from (Select  h.cust_id,
        sum(PRINCIPAL_AMT+PRINCIPAL_ADJ-PRINCIPAL_APPL) PRN,
        sum(LPS_AMT+LPS_ADJ-LPS_APPL) LPS, 
        sum(VAT_AMT+VAT_ADJ-VAT_APPL) VAT,
        SUM(PRINCIPAL_AMT+PRINCIPAL_ADJ-PRINCIPAL_APPL+LPS_AMT+LPS_ADJ-LPS_APPL+VAT_AMT+VAT_ADJ-VAT_APPL) TOTAL,
        SUM(PRINCIPAL_AMT+PRINCIPAL_ADJ-PRINCIPAL_APPL+LPS_AMT+LPS_ADJ-LPS_APPL) DUESTOTAL
        from ebc.bc_invoice_hdr H
        join ebc.bc_customers c on h.cust_id= c.cust_id
        where  bill_cycle_code <= '202107' 
        AND
        h.cust_id in(226888,226890)
        group by h.cust_id)  c
        join bc_customers bc on bc.cust_id=c.cust_id
        join bc_bill_image bi on bi.cust_id=c.cust_id
        where bc.cust_id in(226888,226890)
                        
                        
                        
                        select bi.METER_NUM_KWH,(bi.CUSTOMER_NUM || bi.CONS_CHK_DIGIT) AS CONSUMER_NUMBER,SUBSTR(bi.AREA_CODE, 1, 3) AS BOOK_NO from bc_bill_image bi