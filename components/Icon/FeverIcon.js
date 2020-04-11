import React from 'react'

export default function FeverIcon({ width = '68px', height = '48px' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 68" version="1.1">
      <title>Shape</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <rect id="path-1" x="0" y="0" width="289" height="285" rx="27" />
        <filter
          x="-34.6%"
          y="-28.1%"
          width="169.2%"
          height="170.2%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset dx="0" dy="20" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation="30"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.192156863   0 0 0 0 0.270588235   0 0 0 0 0.956862745  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g id="Ideation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Report-symtoms-unselected" transform="translate(-508.000000, -583.000000)">
          <g id="Group-11" transform="translate(392.000000, 508.000000)">
            <g id="HowItWorksCardBackground">
              <use fill="black" fillOpacity="1" filter="url(#filter-2)" />
              <use fill="#FFFFFF" fillRule="evenodd" />
            </g>
            <g
              id="icons8-sad_male"
              transform="translate(116.000000, 75.000000)"
              fill="#1968FC"
              fillRule="nonzero"
            >
              <path
                d="M23.6056476,0 C16.042052,0 10.0707923,2.20006757 6.0431191,6.27106052 C2.02129971,10.3362779 0.0425889162,16.1569301 0.0425889162,23.0516304 C0.0425889162,25.9099868 1.34221527,31.4130435 2.39011318,34.675611 C1.94519579,35.0451763 1.52369511,35.2819301 1.09048682,35.9344433 C0.370422781,37.014267 -0.168161425,38.5560458 0.0484427177,40.3865497 C0.680693743,45.6759518 4.05855301,47.529552 5.17084723,48.0723502 C5.59234791,50.5438176 6.88612047,53.6042803 9.01118679,56.7282609 C11.2884609,60.0774457 14.4087365,63.3111413 18.2373684,65.1185458 C19.6131002,66.8220109 21.6503535,68 24.0212945,68 C26.3922354,68 28.4353425,66.8220109 29.8110743,65.1127717 C33.6221434,63.3053672 36.724856,60.0658975 38.9845687,56.7224868 C41.0862183,53.5985062 42.362428,50.5438176 42.7839287,48.0781257 C43.9196396,47.5411002 47.3033527,45.7163719 47.9356037,40.4385194 C48.1580631,38.6022415 47.6077698,37.0546871 46.881852,35.9633152 C46.4427884,35.3050279 46.0154339,35.0567259 45.5705165,34.6813866 C46.6184144,31.3841716 48,26.2911002 48,20.6956522 C48,18.1260194 47.4614158,14.6093757 45.6934538,11.548913 C44.0425769,8.67900852 41.0569463,6.32303026 36.8243781,6.02853261 C34.9042083,3.13553026 30.7477425,0 23.6056476,0 Z M23.6056476,2.95652174 C30.3438047,2.95652174 33.557747,6.04585635 34.693458,8.09578878 C34.9568955,8.57506757 35.4603539,8.86956522 36.0106472,8.86956522 C39.669507,8.86956522 41.6950527,10.5961281 43.0883458,13.0098502 C44.4816405,15.4235737 45.0026618,18.5648781 45.0026618,20.6956522 C45.0026618,26.175611 43.4981389,31.5574045 42.4795115,34.6294154 C42.2687612,35.2819301 42.5321987,35.986413 43.1176163,36.3502042 C43.3752001,36.5061149 43.9606177,36.9565217 44.3762646,37.580163 C44.7919115,38.2095784 45.0963286,38.9891304 44.9616822,40.0978261 C44.3879737,44.8559783 41.021822,45.8029891 41.021822,45.8029891 C40.4656749,45.9877717 40.0734447,46.4728261 40.0149037,47.0444977 C39.8392777,48.6786692 38.5689218,51.9932065 36.4848351,55.0825411 C34.4007484,58.1718757 31.5263475,61.1052997 28.3709477,62.548913 C28.1250716,62.6644022 27.9084674,62.8491848 27.7562581,63.074389 C26.9483825,64.2639263 25.5902137,65.0434783 24.0212945,65.0434783 C22.4523752,65.0434783 21.0942064,64.2639263 20.2863293,63.074389 C20.1341215,62.8491848 19.9175173,62.6701763 19.6716412,62.5546871 C16.4986785,61.1052997 13.6008609,58.1718757 11.4992113,55.0825411 C9.39756167,51.9932065 8.10964291,48.6728937 7.93987218,47.0444977 C7.88133117,46.4786002 7.49495479,45.9993214 6.95637058,45.8087632 C6.95637058,45.8087632 3.59607422,44.8155567 3.02821801,40.0400823 C2.89357308,38.925611 3.18628114,38.1691583 3.59607422,37.5570652 C4.0058658,36.9449736 4.56786671,36.511889 4.84301337,36.3502042 C5.43428478,35.980639 5.69186853,35.2588323 5.46355529,34.6063176 C4.55615911,32.0309107 3.03992711,24.9456522 3.03992711,23.0516304 C3.03992711,16.7112779 4.81959666,11.7394697 8.19160213,8.33254113 C11.5636076,4.92561104 16.6274696,2.95652174 23.6056476,2.95652174 Z M18.7408268,32.5217391 C16.3230524,32.515965 14.467279,32.9259518 13.0212971,33.8787368 C11.5694614,34.8315217 10.6737728,36.2173913 9.89516776,37.7880435 C9.53220809,38.5213998 9.83662525,39.4048913 10.580106,39.7629083 C11.3294405,40.1209239 12.2251291,39.8206522 12.5880888,39.0815217 C13.273027,37.7072018 13.8760076,36.8699045 14.6838831,36.3328804 C15.4859049,35.8016304 16.6508863,35.4724868 18.7291192,35.4782609 C19.2677034,35.4898105 19.7711618,35.206861 20.0463085,34.7506801 C20.3214551,34.2887236 20.3214551,33.7228261 20.0521623,33.2608696 C19.7828709,32.798913 19.279411,32.515965 18.7408268,32.5217391 Z M29.1319899,32.5217391 C28.3006976,32.5332888 27.6450299,33.2031257 27.6567375,34.0173237 C27.6684466,34.8372958 28.3416757,35.484035 29.1729695,35.4782609 C31.2746191,35.5533284 32.4747248,35.8940217 33.2884557,36.407948 C34.1021851,36.9276498 34.6876027,37.71875 35.3783962,39.0872958 C35.7413544,39.8206522 36.6428983,40.1209239 37.386379,39.7629083 C38.1240044,39.3991172 38.4284216,38.5098502 38.0596081,37.7822694 C37.2751493,36.2000676 36.356044,34.8488455 34.9159159,33.9307065 C33.4757893,33.0067935 31.6668478,32.6083563 29.2783439,32.5217391 C29.2315105,32.5217391 29.1788233,32.5217391 29.1319899,32.5217391 Z M15.7376348,36.9565217 C14.4965495,36.9565217 13.4896312,37.9497283 13.4896312,39.173913 C13.4896312,40.3980978 14.4965495,41.3913043 15.7376348,41.3913043 C16.9787202,41.3913043 17.9856385,40.3980978 17.9856385,39.173913 C17.9856385,37.9497283 16.9787202,36.9565217 15.7376348,36.9565217 Z M32.2229949,36.9565217 C30.9819095,36.9565217 29.9749912,37.9497283 29.9749912,39.173913 C29.9749912,40.3980978 30.9819095,41.3913043 32.2229949,41.3913043 C33.4640802,41.3913043 34.4709985,40.3980978 34.4709985,39.173913 C34.4709985,37.9497283 33.4640802,36.9565217 32.2229949,36.9565217 Z M24.0212945,53.1480978 C21.989895,53.1480978 19.8999544,53.6908975 18.4305559,55.1229627 C18.0383257,55.4925279 17.8744087,56.0411002 18.0090552,56.560802 C18.1437016,57.0805023 18.5534932,57.484715 19.074516,57.623302 C19.6013911,57.761889 20.1575382,57.6059783 20.5380593,57.2248649 C21.1878732,56.5896739 22.5870217,56.1046196 24.0212945,56.1046196 C25.4497134,56.1103937 26.8137361,56.6012236 27.3991537,57.201767 C27.7679672,57.5886545 28.3241143,57.7503393 28.8451356,57.623302 C29.3720107,57.4962632 29.7876576,57.0978261 29.9340116,56.5896739 C30.0803672,56.0757477 29.9340116,55.5213998 29.5534906,55.1460605 C28.1309254,53.6908975 26.052694,53.1538719 24.0212945,53.1480978 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}